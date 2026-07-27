import TibiameOpenTibiaKeywordPage, { generateMetadata } from './tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameOpenTibiaKeywordPage />;
}
