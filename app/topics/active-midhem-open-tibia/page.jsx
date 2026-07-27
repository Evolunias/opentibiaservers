import ActiveMidhemOpenTibiaKeywordPage, { generateMetadata } from './active-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemOpenTibiaKeywordPage />;
}
