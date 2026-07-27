import ActiveMiracleTibiaKeywordPage, { generateMetadata } from './active-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleTibiaKeywordPage />;
}
