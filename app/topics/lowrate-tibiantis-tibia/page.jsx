import LowrateTibiantisTibiaKeywordPage, { generateMetadata } from './lowrate-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisTibiaKeywordPage />;
}
