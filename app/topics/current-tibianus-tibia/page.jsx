import CurrentTibianusTibiaKeywordPage, { generateMetadata } from './current-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusTibiaKeywordPage />;
}
