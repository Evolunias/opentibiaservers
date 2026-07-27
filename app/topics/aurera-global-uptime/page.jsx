import AureraGlobalUptimeKeywordPage, { generateMetadata } from './aurera-global-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalUptimeKeywordPage />;
}
