import LowrateNostaltherTibiaKeywordPage, { generateMetadata } from './lowrate-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherTibiaKeywordPage />;
}
