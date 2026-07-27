import LowrateElderaOpenTibiaKeywordPage, { generateMetadata } from './lowrate-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaOpenTibiaKeywordPage />;
}
