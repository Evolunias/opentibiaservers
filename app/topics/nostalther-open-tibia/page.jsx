import NostaltherOpenTibiaKeywordPage, { generateMetadata } from './nostalther-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherOpenTibiaKeywordPage />;
}
