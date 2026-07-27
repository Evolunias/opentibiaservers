import DemolidoresHighExpKeywordPage, { generateMetadata } from './demolidores-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresHighExpKeywordPage />;
}
