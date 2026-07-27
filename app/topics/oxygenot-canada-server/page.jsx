import OxygenotCanadaServerKeywordPage, { generateMetadata } from './oxygenot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotCanadaServerKeywordPage />;
}
