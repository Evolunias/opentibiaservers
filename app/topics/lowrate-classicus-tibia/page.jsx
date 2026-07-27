import LowrateClassicusTibiaKeywordPage, { generateMetadata } from './lowrate-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusTibiaKeywordPage />;
}
