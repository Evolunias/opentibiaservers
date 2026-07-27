import NilotLaunchKeywordPage, { generateMetadata } from './nilot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotLaunchKeywordPage />;
}
