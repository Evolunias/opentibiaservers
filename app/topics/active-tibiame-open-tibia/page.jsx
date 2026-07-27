import ActiveTibiameOpenTibiaKeywordPage, { generateMetadata } from './active-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameOpenTibiaKeywordPage />;
}
