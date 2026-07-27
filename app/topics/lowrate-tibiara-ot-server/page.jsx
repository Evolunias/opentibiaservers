import LowrateTibiaraOtServerKeywordPage, { generateMetadata } from './lowrate-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraOtServerKeywordPage />;
}
