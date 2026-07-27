import Tibia1098NoResetServerListKeywordPage, { generateMetadata } from './tibia-10-98-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NoResetServerListKeywordPage />;
}
