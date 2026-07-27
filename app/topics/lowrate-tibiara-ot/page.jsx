import LowrateTibiaraOtKeywordPage, { generateMetadata } from './lowrate-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraOtKeywordPage />;
}
