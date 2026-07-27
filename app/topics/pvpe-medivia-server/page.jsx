import PvpeMediviaServerKeywordPage, { generateMetadata } from './pvpe-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeMediviaServerKeywordPage />;
}
