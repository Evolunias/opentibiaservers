import LowrateXanteriaTibiaKeywordPage, { generateMetadata } from './lowrate-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaTibiaKeywordPage />;
}
