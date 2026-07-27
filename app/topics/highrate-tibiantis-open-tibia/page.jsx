import HighrateTibiantisOpenTibiaKeywordPage, { generateMetadata } from './highrate-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisOpenTibiaKeywordPage />;
}
