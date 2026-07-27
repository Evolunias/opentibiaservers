import PvpeUnlineServerKeywordPage, { generateMetadata } from './pvpe-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeUnlineServerKeywordPage />;
}
