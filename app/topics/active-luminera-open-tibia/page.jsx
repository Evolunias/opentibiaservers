import ActiveLumineraOpenTibiaKeywordPage, { generateMetadata } from './active-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraOpenTibiaKeywordPage />;
}
