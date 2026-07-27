import BaiakTibiaPrivateServerLatinAmericaKeywordPage, { generateMetadata } from './baiak-tibia-private-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiaPrivateServerLatinAmericaKeywordPage />;
}
