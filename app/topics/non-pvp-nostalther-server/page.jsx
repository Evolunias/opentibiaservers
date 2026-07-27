import NonPvpNostaltherServerKeywordPage, { generateMetadata } from './non-pvp-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpNostaltherServerKeywordPage />;
}
