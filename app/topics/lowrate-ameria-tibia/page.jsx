import LowrateAmeriaTibiaKeywordPage, { generateMetadata } from './lowrate-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaTibiaKeywordPage />;
}
