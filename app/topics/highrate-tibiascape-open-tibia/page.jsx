import HighrateTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './highrate-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeOpenTibiaKeywordPage />;
}
