import ActiveElderaOfficialKeywordPage, { generateMetadata } from './active-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaOfficialKeywordPage />;
}
