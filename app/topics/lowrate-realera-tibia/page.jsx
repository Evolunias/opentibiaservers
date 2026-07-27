import LowrateRealeraTibiaKeywordPage, { generateMetadata } from './lowrate-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraTibiaKeywordPage />;
}
