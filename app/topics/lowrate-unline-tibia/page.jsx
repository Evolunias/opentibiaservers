import LowrateUnlineTibiaKeywordPage, { generateMetadata } from './lowrate-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineTibiaKeywordPage />;
}
