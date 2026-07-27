import LowrateKasteriaKeywordPage, { generateMetadata } from './lowrate-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaKeywordPage />;
}
