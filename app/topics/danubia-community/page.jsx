import DanubiaCommunityKeywordPage, { generateMetadata } from './danubia-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaCommunityKeywordPage />;
}
