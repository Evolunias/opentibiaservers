import TibiascapeTibiaKeywordPage, { generateMetadata } from './tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeTibiaKeywordPage />;
}
