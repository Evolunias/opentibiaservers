import TrashformersUptimeKeywordPage, { generateMetadata } from './trashformers-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersUptimeKeywordPage />;
}
