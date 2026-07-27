import LowrateMediviaServerKeywordPage, { generateMetadata } from './lowrate-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaServerKeywordPage />;
}
