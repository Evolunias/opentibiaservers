import LowExpNilotServerKeywordPage, { generateMetadata } from './low-exp-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpNilotServerKeywordPage />;
}
