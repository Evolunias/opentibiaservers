import ActiveOlderaTibiaKeywordPage, { generateMetadata } from './active-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaTibiaKeywordPage />;
}
