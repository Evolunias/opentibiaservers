import OpenTibiaServersMexicoKeywordPage, { generateMetadata } from './open-tibia-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersMexicoKeywordPage />;
}
