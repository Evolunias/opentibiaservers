import ActiveNostaltherTibiaKeywordPage, { generateMetadata } from './active-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherTibiaKeywordPage />;
}
