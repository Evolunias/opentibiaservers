import LowrateClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './lowrate-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassickDrakoriaTibiaKeywordPage />;
}
