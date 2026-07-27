import NonPvpCyntaraServerKeywordPage, { generateMetadata } from './non-pvp-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpCyntaraServerKeywordPage />;
}
