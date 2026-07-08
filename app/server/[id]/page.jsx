import { redirect } from 'next/navigation';
import { getServerPath } from '@/lib/server-paths';
import { getServerRecordById } from '@/lib/server-records';

export default async function LegacyServerIdPage({ params }) {
  const server = await getServerRecordById(params.id);

  if (server) {
    redirect(getServerPath(server));
  }

  redirect('/');
}
