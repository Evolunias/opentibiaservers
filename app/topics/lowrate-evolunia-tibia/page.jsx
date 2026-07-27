import LowrateEvoluniaTibiaKeywordPage, { generateMetadata } from './lowrate-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaTibiaKeywordPage />;
}
