import ActiveMidhemTibiaKeywordPage, { generateMetadata } from './active-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemTibiaKeywordPage />;
}
