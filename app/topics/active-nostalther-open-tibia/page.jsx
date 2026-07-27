import ActiveNostaltherOpenTibiaKeywordPage, { generateMetadata } from './active-nostalther-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherOpenTibiaKeywordPage />;
}
