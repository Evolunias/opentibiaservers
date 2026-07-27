import NonPvpUnlineServerKeywordPage, { generateMetadata } from './non-pvp-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpUnlineServerKeywordPage />;
}
