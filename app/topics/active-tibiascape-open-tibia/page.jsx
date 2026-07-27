import ActiveTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './active-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeOpenTibiaKeywordPage />;
}
