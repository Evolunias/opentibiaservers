import LowrateRealestaTibiaKeywordPage, { generateMetadata } from './lowrate-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaTibiaKeywordPage />;
}
