import ActiveDemolidoresTibiaKeywordPage, { generateMetadata } from './active-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresTibiaKeywordPage />;
}
