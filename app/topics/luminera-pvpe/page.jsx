import LumineraPvpeKeywordPage, { generateMetadata } from './luminera-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpeKeywordPage />;
}
