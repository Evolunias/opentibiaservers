import OfficialRealestaOtServerKeywordPage, { generateMetadata } from './official-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaOtServerKeywordPage />;
}
