import HarmoniaKeywordPage, { generateMetadata } from './harmonia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaKeywordPage />;
}
