import ActiveClassicusOpenTibiaKeywordPage, { generateMetadata } from './active-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusOpenTibiaKeywordPage />;
}
