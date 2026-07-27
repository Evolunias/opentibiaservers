import OtServersHighExpKeywordPage, { generateMetadata } from './ot-servers-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersHighExpKeywordPage />;
}
